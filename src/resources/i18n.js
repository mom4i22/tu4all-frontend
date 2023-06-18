import i18next from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome_msg1: " Technology is best when it brings people together. ",
      welcome_msg2: "- Matt Mullenweg, CEO of Automattic",
      welcome_login: "Login",
      welcome_signup: "Join TU4All!",
      welcome_forgot_password: "Forgot your password?",

      common_username: "Username",
      common_email: "E-mail",
      common_password: "Password",
      common_password_re: "Retype password",
      common_change_password: "Change password",
      common_submit: "Submit",
      common_cancel: "Cancel",
      common_full_name: "Full name",
      common_faculty: "Faculty",
      common_faculty_num: "Faculty number",
      common_date_born: "Date of birth",
      common_profile_pic_upl: "Upload profile picture",
      common_open_chat: "Open chat",
      common_close_chat: "Close chat",
      common_non_chat: "No chat available.",
      common_yes: "Yes",
      common_no: "No",
      common_copyright1: "© 2023 Momchil Trenchev. All rights reserved.",
      common_copyright2: "CSE (Coumputer and Software Engineering), 121210098",
      common_copyright3: "Link to Github",

      common_username_required: "Please input your username!",
      common_email_required: "Please input a valid email!",
      common_password_required: "Please input your password!",
      common_name_required: "Please input your name!",
      common_faculty_required: "Please input the faculty you're in!",
      common_fac_num_required: "Please input your faculty number!",
      common_date_required: "Please input your birth date!",

      nav_feed: "Feed",
      nav_friends: "Friends",
      nav_profile: "Profile",
      nav_posts: "Posts",
      nav_student_help: "Student help",
      nav_faq: "FAQ",
      nav_logout: "Log out",

      notifications_fr_req: "Friend requests",
      notifications_likes: "New likes",
      notifications_comm: "New comments",

      friends_req: "Friend requests",
      friends_search: "Search people",
      friends_my_friends: "My friends",
      friends_type: "Type to search...",
      friends_block: "Block user",
      friends_unblock: "Unblock user",
      friends_send_req: "Send request",
      friends_unsend_req: "Unsend request",
      friends_accept: "Accept request",
      friends_decline: "Decline request",
      friends_remove: "Remove friend",

      posts_save: "Save",
      posts_delete: "Delete",
      posts_delete_comment_pop: "Are you sure you want to delete this comment?",
      posts_delete_pop: "Are you sure you want to delete this post?",
      posts_discard: "Discard changes",
      posts_create: "Create new post",
      posts_desc: "Description",
      posts_picture: "Upload picture",
      posts_btnsubm: "Create",
      posts_edit_desc: "You can edit your post's description here..",
      posts_comment: "Write your comment here",

      chat_find_friends:
        "First add some friends and then enjoy chatting with them anytime!",
      chat_no_convo:
        "There is no conversation with this user...type a message below and send it!",

      error_feed_empty:
        "Hmm...your feed seems to be empty. Find some friends and come back later!",
      error_comments_empty:
        "It looks like there are no comments abvaialble..Be the first one to put your comment!",
      error_: "Error",
      error_message_empty:
        "You can't send a message with empty text, please add text.",
      error_passwords_not_match: "Oops, paswords dont't match!",
      error_my_posts_empty:
        "You can now create your own posts! Dont't waste time and share great moments with your friends!  ",
    },

    faq_post_heading: "How to create a post?",
    faq_post_content:
      "Navigate to 'Posts' page, then press the button 'Create a new post' and start typing your desired description as well as uploading your desied photo (optional). When fhinished, press 'Create' - your post will appear. ",

    notifications_for: "Notifications for: ",
  },

  bg: {
    translation: {
      welcome_msg1: "Технологията е най-добра, когато свързва хората.",
      welcome_msg2: "- Мат Мъленуег, изпълнителен директор на Automattic",
      welcome_login: "Вход",
      welcome_signup: "Присъедини се към TU4All!",
      welcome_forgot_password: "Забравена парола?",

      common_username: "Потребителско име",
      common_email: "Имейл",
      common_password: "Парола",
      common_password_re: "Повтори паролата",
      common_change_password: "Промени паролата",
      common_submit: "Изпрати",
      common_cancel: "Отказ",
      common_full_name: "Пълно име",
      common_faculty: "Факултет",
      common_faculty_num: "Факултетен номер",
      common_date_born: "Дата на раждане",
      common_profile_pic_upl: "Качи профилна снимка",
      common_open_chat: "Отвори чат",
      common_close_chat: "Затвори чат",
      common_non_chat: "Няма наличен чат.",
      common_yes: "Да",
      common_no: "Не",
      common_copyright1: "© 2023 Момчил Тренчев. Всички права запазени.",
      common_copyright2: "КСИ (Компютърно и софтуерно инженерство), 121210098",
      common_copyright3: "Връзка към Github",

      common_username_required: "Моля, въведете потребителско име!",
      common_email_required: "Моля, въведете валиден имейл!",
      common_password_required: "Моля, въведете парола!",
      common_name_required: "Моля, въведете вашето име!",
      common_faculty_required: "Моля, въведете факултета, в който сте!",
      common_fac_num_required: "Моля, въведете факултетния си номер!",
      common_date_required: "Моля, въведете датата на вашето раждане!",

      nav_feed: "Публикации",
      nav_friends: "Приятели",
      nav_profile: "Профил",
      nav_posts: "Публикации",
      nav_student_help: "Помощ за студенти",
      nav_faq: "ЧЗВ",
      nav_logout: "Изход",

      notifications_fr_req: "Приятелски заявки",
      notifications_likes: "Нови харесвания",
      notifications_comm: "Нови коментари",

      friends_req: "Приятелски заявки",
      friends_search: "Търсене на хора",
      friends_my_friends: "Моите приятели",
      friends_type: "Търсене...",
      friends_block: "Блокирай потребител",
      friends_unblock: "Разблокирай потребител",
      friends_send_req: "Изпрати заявка",
      friends_unsend_req: "Откажи заявка",
      friends_accept: "Приеми заявка",
      friends_decline: "Отклони заявка",
      friends_remove: "Премахни приятел",

      posts_save: "Запази",
      posts_delete: "Изтрий",
      posts_delete_comment_pop:
        "Сигурни ли сте, че искате да изтриете този коментар?",
      posts_delete_pop:
        "Сигурни ли сте, че искате да изтриете тази публикация?",
      posts_discard: "Отхвърли промените",
      posts_create: "Създай нова публикация",
      posts_desc: "Описание",
      posts_picture: "Качи снимка",
      posts_btnsubm: "Създай",
      posts_edit_desc:
        "Можете да редактирате описанието на публикацията тук...",
      posts_comment: "Напишете коментара си тук",

      chat_find_friends:
        "Първо добавете някои приятели и след това се насладете на разговор с тях по всяко време!",
      chat_no_convo:
        "Няма разговор с този потребител...напишете съобщение по-долу и го изпратете!",

      error_feed_empty:
        "Хмм...изглежда вашата стена е празна. Намерете приятели и се върнете по-късно!",
      error_comments_empty:
        "Изглежда няма налични коментари...Бъдете първият, който ще добави коментар!",
      error_: "Грешка",
      error_message_empty:
        "Не можете да изпратите съобщение без текст, моля, добавете текст.",
      error_passwords_not_match: "Опс, паролите не съвпадат!",
      error_my_posts_empty:
        "Вече можете да създавате собствени публикации! Не губете време и споделете страхотни моменти с вашите приятели!",
    },

    faq_post_heading: "Как да създам публикация?",
    faq_post_content:
      "Навигирайте до страницата 'Публикации', след което натиснете бутона 'Създай нова публикация' и започнете да пишете желаното описание и да качвате желаната снимка (опционално). Когато приключите, натиснете 'Създай' - вашата публикация ще се появи.",

    notifications_for: "Известия за: ",
  },
};

i18next

  .use(initReactI18next)

  .init({
    debug: true,
    resources,

    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
