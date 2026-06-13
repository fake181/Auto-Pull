import { addContextMenuPatch, removeContextMenuPatch } from "@api/ContextMenu";
import { FluxDispatcher, Menu, React, RestAPI, UserStore } from "@webpack/common";
import definePlugin from "@utils/types";

let targetUserId: string | null = null;
let myGuildId: string | null = null;
let myChannelId: string | null = null;
let lastMove = 0;

async function pullTarget() {
    if (!targetUserId || !myGuildId || !myChannelId) return;

    const me = UserStore.getCurrentUser()?.id;
    if (!me || targetUserId === me) return;

    const now = Date.now();
    if (now - lastMove < 1000) return;
    lastMove = now;

    await RestAPI.patch({
        url: `/guilds/${myGuildId}/members/${targetUserId}`,
        body: {
            channel_id: myChannelId
        }
    });
}

function onVoiceStateUpdates(event: any) {
    const me = UserStore.getCurrentUser()?.id;
    if (!me) return;

    for (const state of event.voiceStates ?? []) {
        if (state.userId !== me) continue;

        myGuildId = state.guildId ?? null;
        myChannelId = state.channelId ?? null;

        if (myChannelId) pullTarget().catch(() => {});
    }
}

function userContextPatch(children: any[], props: any) {
    const user = props?.user;
    if (!user?.id) return;

    const me = UserStore.getCurrentUser()?.id;
    if (user.id === me) return;

    children.splice(
        -1,
        0,
        React.createElement(Menu.MenuCheckboxItem, {
            id: "vc-auto-pull-user",
            label: "Auto Pull",
            checked: targetUserId === user.id,
            action: () => {
                targetUserId = targetUserId === user.id ? null : user.id;
                pullTarget().catch(() => {});
            }
        })
    );
}

export default definePlugin({
    name: "AutoPull",
    description: "Pull selected user with you across voice channels",
    authors: [{ name: "crusader", id: 342776697105678346n }],

    start() {
        addContextMenuPatch("user-context", userContextPatch);
        FluxDispatcher.subscribe("VOICE_STATE_UPDATES", onVoiceStateUpdates);
    },

    stop() {
        removeContextMenuPatch("user-context", userContextPatch);
        FluxDispatcher.unsubscribe("VOICE_STATE_UPDATES", onVoiceStateUpdates);
        targetUserId = null;
    }
});