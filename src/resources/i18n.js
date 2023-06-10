import i18next from "i18next";

import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

  en: {

    translation: {

      welcome_msg1: " Technology is best when it brings people together. ",
      welcome_msg2: "- Matt Mullenweg, CEO of Automattic",
      welcome_login: "Login",
      welcome_signup: "Join TU4All!",
      welcome_forgot_password: "Forgot your password?",

      common_username:"Username",
      common_email:"E-mail",
      common_password:"Password",
      common_password_re:"Retype password",
      common_change_password:"Change password",
      common_submit: "Submit",
      common_cancel: "Cancel",
      common_full_name: "Full name",
      common_faculty: "Faculty",
      common_faculty_num: "Faculty number",
      common_date_born: "Date of birth",
      common_profile_pic_upl: "Upload profile picture",
      common_open_chat:"Open chat",
      common_close_chat:"Close chat",
      common_non_chat:"No chat available.",

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
      posts_discard: "Discard changes",

    },

  },

  bg: {

    translation: {
welcome_msg1: "Технологията е най-добра, когато свързва хората.",
welcome_msg2: "- Мат Мъленуег, изпълнителен директор на Automattic",
welcome_login: "Вход",
welcome_signup: "Присъединете се към TU4All!",
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
common_profile_pic_upl: "Качи снимка за профила",
common_open_chat: "Отвори чат",
common_close_chat: "Затвори чат",
common_non_chat: "Няма наличен чат.",

common_username_required: "Моля, въведете потребителското си име!",
common_email_required: "Моля, въведете валиден имейл!",
common_password_required: "Моля, въведете паролата си!",
common_name_required: "Моля, въведете вашето име!",
common_faculty_required: "Моля, въведете факултета, в който сте!",
common_fac_num_required: "Моля, въведете факултетния си номер!",
common_date_required: "Моля, въведете вашата дата на раждане!",

nav_feed: "Публикации",
nav_friends: "Приятели",
nav_profile: "Профил",
nav_posts: "Постове",
nav_student_help: "Помощ за студенти",
nav_faq: "ЧЗВ",
nav_logout: "Изход"
    },

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