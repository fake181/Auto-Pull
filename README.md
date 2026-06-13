# DISCLAMER This project may not be copied, modified, redistributed, or claimed without permission. Discord: fake181

# Auto Pull

## 🇺🇸 English

### 📌 Description

**Auto Pull** is a Vencord plugin that automatically moves a selected user into your current voice channel whenever you switch channels.

Once enabled, the selected user will follow you between voice channels automatically, as long as you have the **Move Members** permission and Discord allows the action.

### ✨ Features

* 🔄 Automatically moves the selected user to your voice channel.
* 👤 Enable Auto Pull for specific users only.
* 🛡️ Requires the **Move Members** permission.
* ⚡ Runs automatically in the background after being enabled.
* 🎯 Perfect for moderators, staff members, or friends who frequently switch voice channels together.

### 📥 Installation

1. Download or clone the Vencord source code.
2. Create the `src/userplugins` folder if it doesn't already exist.
3. Place the plugin inside:

   ```
   src/userplugins/AutoPull
   ```
4. Rebuild and inject Vencord.
5. Restart Discord.
6. Enable **Auto Pull** from the Plugins page.

### ⚠️ Notes

* The plugin requires the **Move Members** permission.
* Discord role hierarchy and permission restrictions still apply.
* The plugin does not bypass Discord permissions; it only automates actions your account is already allowed to perform.

---

# 🇸🇦 العربية

## 📌 الوصف

**Auto Pull** هو بلوقن لـ **Vencord** يقوم تلقائيًا بنقل مستخدم تحدده إلى الروم الصوتي الذي تتواجد فيه كلما انتقلت إلى روم صوتي آخر.

بعد تفعيل الميزة على شخص معين، سيتم سحبه معك تلقائيًا بين الرومات الصوتية، بشرط أن تمتلك صلاحية **Move Members (سحب الأعضاء)** وأن تسمح صلاحيات ديسكورد بتنفيذ العملية.

## ✨ المميزات

* 🔄 سحب المستخدم المحدد تلقائيًا عند انتقالك بين الرومات الصوتية.
* 👤 إمكانية تفعيل الميزة على أشخاص محددين فقط.
* 🛡️ يتطلب امتلاك صلاحية **Move Members**.
* ⚡ يعمل تلقائيًا في الخلفية بعد تفعيله.
* 🎯 مناسب للمشرفين والإداريين أو للأصدقاء الذين يتنقلون بين الرومات باستمرار.

## 📥 طريقة التثبيت

1. قم بتحميل أو استنساخ (Clone) مشروع Vencord.
2. أنشئ مجلد `src/userplugins` إذا لم يكن موجودًا.
3. ضع ملفات البلوقن داخل:

   ```
   src/userplugins/AutoPull
   ```
4. أعد بناء (Build) وحقن (Inject) Vencord.
5. أعد تشغيل Discord.
6. فعّل **Auto Pull** من صفحة البلوقنات.

## ⚠️ ملاحظات

* يجب أن تمتلك صلاحية **Move Members** حتى يتمكن البلوقن من نقل المستخدمين.
* لا يتجاوز البلوقن قيود صلاحيات ديسكورد أو ترتيب الرتب (Role Hierarchy).
* إذا لم يكن لديك الإذن الكافي لنقل المستخدم المحدد، فلن يتمكن البلوقن من سحبه.
* البلوقن لا يمنح أي صلاحيات إضافية، وإنما يقوم بأتمتة عملية النقل المسموح بها لحسابك.
