
Description:

Auto Pull is a Vencord plugin that automatically moves a selected user into your current voice channel whenever you switch voice channels.

Once Auto Pull is enabled for a user, they'll follow you between voice channels without any manual action—as long as you have the Move Members permission in the server and Discord allows the action.

Features
🔄 Automatically moves the selected user when you change voice channels.
👤 Works on a per-user basis (choose who to auto-pull).
🛡️ Only functions if you have the required Move Members permission.
⚡ Runs automatically in the background after being enabled.
🎯 Great for moderators, staff members, or friends who frequently switch channels together.
Installation (Custom Vencord Plugin)

This plugin is intended for source-built Vencord installations.

Clone or download the Vencord source.
Create the src/userplugins folder if it does not already exist.
Place the plugin folder (or index.ts) inside src/userplugins/AutoPull.
Rebuild and inject Vencord.
Restart Discord and enable Auto Pull from the Plugins page.
Notes
Requires the Move Members permission to move another user.
If Discord permissions or role hierarchy prevent moving the target user, the plugin will not be able to move them.
The plugin only automates actions that your account is already permitted to perform.




## الوصف

**Auto Pull** هو بلوقن لـ Vencord يقوم تلقائيًا بسحب مستخدم تحدده إلى الروم الصوتي الذي تدخله كلما انتقلت بين الرومات الصوتية.

بعد تفعيل الميزة على شخص معين، سيتم نقله معك تلقائيًا عند تغيير الروم، بشرط أن تمتلك صلاحية **Move Members (سحب الأعضاء)** في السيرفر وأن تسمح صلاحيات ديسكورد بتنفيذ العملية.

### المميزات

* 🔄 سحب المستخدم المحدد تلقائيًا عند انتقالك بين الرومات الصوتية.
* 👤 يمكنك اختيار شخص معين لتفعيل الميزة عليه.
* 🛡️ لا تعمل الميزة إلا إذا كنت تمتلك صلاحية **Move Members** في السيرفر.
* ⚡ تعمل في الخلفية بشكل تلقائي بعد تفعيلها.
* 🎯 مناسبة للمشرفين أو الأصدقاء الذين ينتقلون بين الرومات بشكل متكرر.

## طريقة التركيب (بلوقن Vencord مخصص)

هذا البلوقن مخصص لإصدارات Vencord المبنية من المصدر (Source Build).

1. قم بتحميل أو استنساخ (Clone) مشروع Vencord.
2. أنشئ مجلد `src/userplugins` إذا لم يكن موجودًا.
3. ضع ملفات البلوقن داخل `src/userplugins/AutoPull`.
4. أعد بناء (Build) وحقن (Inject) Vencord.
5. أعد تشغيل Discord ثم فعّل **Auto Pull** من صفحة البلوقنات.

## ملاحظات

* يتطلب امتلاك صلاحية **Move Members** حتى تتمكن من سحب المستخدمين.
* إذا كانت صلاحيات ديسكورد أو ترتيب الرتب (Role Hierarchy) يمنع نقل الشخص المحدد، فلن يتمكن البلوقن من سحبه.
* البلوقن لا يمنح أي صلاحيات إضافية، وإنما يقوم بأتمتة عملية السحب التي يملك حسابك الإذن بتنفيذها بالفعل.
