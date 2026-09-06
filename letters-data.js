// =====================================================
// SHARED CONFIG — loaded by index.html AND every day*.html page
// =====================================================
const BIRTHDAY = new Date(2026, 8, 9, 0, 0, 0); // September 9, 2026, 00:00:00

// Add each day's letter content here as you write them.
// Leave a day as null and a "coming soon" note shows instead.
// `theme` controls the visual world for that letter: 'default', 'sunrise', or 'night'.
const LETTERS = {
  1: {
    title: "September 1",
    theme: "default",
    themeName: "",
    lockedMessage: "This letter is waiting for you.",
    paragraphs: [
      "My love,",
      "Today is September 1, and we officially have nine days until September 9. Our day. Our birthday.",
      "I really never thought I could love someone this much from the bottom of my heart. Honestly before you I never imagined that someone could become this important to me. But you really crossed all my expectations of what love could feel like and what kind of person I could ever want in my life.",
      "You make my days so much better, day by day. Sometimes I dont even realize it but just talking to you can completely change my mood everytime. Your presence in my life has become something I really love so much.",
      "And the funny thing is, out of all the 365 days in a year we somehow share the same birthday.",
      "Maybe it's just a coincidence. But I think its a really soo beautifull.",
      "September 9 is getting closer soo happyy bdayyy ♡",
      "And I'm already excited to celebrate with you."
    ],
    signoff: "With love yours,"
  },
  2: {
    title: "September 2",
    theme: "sunrise",
    themeName: "You Changed Me",
    lockedMessage: "This letter will open when a new day begins.",
    paragraphs: [
      "My love,",
      "Today is September 2, and this letter is about something you probably don't completely realize.",
      "You changed me.",
      "You really changed me in so many ways.",
      "After you came into my life, I started wanting to become better. I started trying to be more effective, more responsible, and more focused.",
      "And honestly, sometimes it feels like I started working harder for you than I ever worked for myself.",
      "Because when I think about you, I think about the future too.",
      "You became one of the reasons I want to do better.",
      "One of the reasons I want to grow.",
      "One of the reasons I want to become someone capable of giving you the happiness you deserve.",
      "And something else changed too.",
      "I started praying for you more than I prayed for myself.",
      "I don't know how to explain that properly, but whenever I pray, I genuinely want good things for you. I want you to be happy. I want you to be safe. I want life to be kind to you.",
      "That's when I realized how deeply I care about you. More than you know.",
      "You didn't force me to change.",
      "You didn't ask me to become better.",
      "But somehow, loving you made me want to.",
      "And I think that's something beautiful.",
      "Because you didn't just enter my life.",
      "You changed the way I look at it.",
      "And every day, without even realizing it, you make me want to become a better version of myself.",
      "Thank you for that.",
      "I love you soo much 🤍"
    ],
    signoff: "With love,"
  },
  3: {
    title: "September 3",
    theme: "night",
    themeName: "How Did I Get This Lucky?",
    lockedMessage: "Some feelings are worth waiting for...",
    paragraphs: [
      "My love,",
      "Sometimes I genuinely sit and wonder...",
      "How did I get you so close?",
      "How did someone like you become such an important part of my life?",
      "And honestly, I feel so lucky.",
      "Like really, really so lucky.",
      "There are moments when I just look at your childhood photos and admire you. I can spend so much time simply looking at your eyes and thinking about how pretty and gorgeous you are.",
      "And sometimes, I still can't believe that I actually have you in my life.",
      "I don't know how I got this lucky. 😭🫶🏼",
      "But the more I get to know you, the more I realize that it's not just about how you look.",
      "It's you.",
      "Your personality.",
      "Your kindness.",
      "The way you are.",
      "The way you treat people.",
      "The way you stay so simple.",
      "I really admire your kind and egoless character. You have something about you that feels different from everyone else.",
      "And honestly, nobody really feels like you.",
      "Everyone else feels unattractive and boring to me compared to how special you feel.",
      "No one makes me feel the way you do.",
      "And I think that's because you aren't just beautiful to me.",
      "You are beautiful in the way you exist.",
      "The way you talk.",
      "The way you think.",
      "The way you simply be yourself.",
      "I really don't think you understand how lucky I feel to have you.",
      "If someone asked me what one of the best things that happened to me was...",
      "I think knowing you would be the one thing I would say."
    ],
    signoff: "With love,"
  },
  4: {
    title: "September 4",
    theme: "night",
    themeName: "From The Other Side Of The Screen",
    lockedMessage: "This letter is waiting for you.",
    paragraphs: [
      "My love,",
      "There is something I want you to know.",
      "Loving you from far away is painful sometimes.",
      "I wont lie about that.",
      "Sometimes I wish I could just be there with you.",
      "I wish I could see you whenever I wanted.",
      "I wish I could sit beside you.",
      "I wish I could hug you when you are sad.",
      "I wish I could see you smile with my own eyes instead of through a screen.",
      "But even though distance can hurt loving you from far away has also shown me something.",
      "It has shown me how real my feelings are.",
      "Because even without touch without seeing you every day and without physically being beside you",
      "My heart still chooses you effortlessly.",
      "I know we only talk online.",
      "But somehow you still became the prettiest girl in my eyes without even trying.",
      "People might think a relationship through a screen isnt real.",
      "But they dont understand.",
      "They dont understand how a simple notification from you can make my day.",
      "They dont understand how much I can miss someone I have only known through a screen.",
      "They dont understand how real it feels when I worry about you.",
      "When I want to make you happy.",
      "When I think about you before sleeping.",
      "Distance doesnt make feelings disappear.",
      "And a screen doesnt make someone less important.",
      "Somehow, even through messages you became incredibly close to my heart.",
      "And until the day I can actually be beside you",
      "I'll keep loving you from here.",
      "From the other side of the screen.",
      "But with a heart that feels closer to you",
      "I love you so much. 🤍"
    ],
    signoff: "With love,"
  },
  5:{
  title: "September 5",
  theme: "default",
  themeName: "",
  lockedMessage: "This letter is waiting for you.",
  paragraphs: [
    "My love,",
    
    "Today I want to talk about the little things.",
    
    "Because honestly?",
    
    "It's the little things about you that make me love you even more.",
    
    "The way you text.",
    
    "Your random moods.",
    
    "The way you make me happy.",
    
    "The way you care without always making it obvious.",
    
    "The small things you do that you probably don't even realize affect me.",
    
    "Sometimes something as simple as the way you talk can make me blush.",
    
    "And then I will just sit there thinking...",
    
    "\"Damn, she really knows how to make me happy.\"",
    
    "You have this power over me without even trying.",
    
    "The smallest things you do can completely change my mood.",
    
    "And I genuinely think you are such a cute and caring person.",
    
    "Someone who just wants to be loved.",
    
    "I remember being impressed by you at the beginning of our conversations. You seemed so cool to me.",
    
    "And somehow, the more I got to know you, the more I started seeing everything behind that.",
    
    "I started seeing your personality.",
    
    "Your softness.",
    
    "Your kindness.",
    
    "The little things that make you who you are.",
    
    "And every time we talk, I end up loving you more without even realizing it.",
    
    "That's what scares me sometimes.",
    
    "Because it happens so naturally.",
    
    "I don't even try to fall more in love with you.",
    
    "It just happens.",
    
    "One conversation.",
    
    "One message.",
    
    "One random moment.",
    
    "And suddenly, I love you a little more than I did yesterday.",
    
    "I guess that's what happens when someone is genuinely special.",
    
    "And you are.",
    
    "You really, really are. 🫶🏻"
  ],
  signoff: "With love, yours Nihal"
},
  6:{
  title: "September 6",
  theme: "default",
  themeName: "",
  lockedMessage: "This letter is waiting for you.",
  paragraphs: [
    "My love,",

    "I don't think I can explain how often I think about you.",

    "You're just everywhere in my thoughts.",

    "Day and night.",

    "Sometimes I'm doing something completely normal and suddenly you appear in my mind.",

    "Something reminds me of you.",

    "I see something and think, \"She would like this.\"",

    "Something happens, and my first thought is, \"I want to tell her.\"",

    "And honestly, I don't think I can stop it even if I tried.",

    "You have this strange power of making me think about you all the time.",

    "I still wonder how someone can become this important to me.",

    "I can spend so much time admiring your photos and thinking about you.",

    "Sometimes I just look at you and wonder how I got so lucky.",

    "And I know I say \"I love you\" a lot.",

    "Maybe too much. 😭",

    "But I don't know why.",

    "I just want to say it.",

    "Even when you already know.",

    "Sometimes you say bye, and I type \"I love you so much,\" but then I just read it and don't send it sometimes. 😭",

    "And I don't know why I do that.",

    "Maybe because there are moments when I feel so much that words suddenly feel embarrassing.",

    "But the truth is...",

    "I do love you.",

    "So much.",

    "Probably more than I manage to say.",

    "And that's why I started writing these paragraphs for you.",

    "I always thought about writing a diary.",

    "But honestly?",

    "Writing about you feels much better.",

    "Because instead of writing about my life...",

    "I get to write about one of the most beautiful parts of it.",

    "You. 💌",

    "I love you.",

    "Always."
  ],
  signoff: "With love, yours Nihal"
},
  7: {
  title: "September 7",
  theme: "default",
  themeName: "",
  lockedMessage: "This letter is waiting for you.",
  paragraphs: [
    "My love,",

    "We've reached September 7.",

    "Only two more days until our birthday.",

    "And as we are getting closer, I feel like I want to tell you something honestly.",

    "Sometimes, I don't know how to explain what you mean to me.",

    "Because feelings can be strange.",

    "There are things you feel deeply but can't completely put into words.",

    "You became one of those things for me.",

    "You are someone I care about.",

    "Someone I want to protect from sadness.",

    "Someone I want to see happy.",

    "Someone whose bad days affect me because I wish I could take some of that sadness away.",

    "And sometimes I wonder if you truly understand that.",

    "I may not always say everything perfectly.",

    "I may not always know the right words.",

    "But please don't mistake silence or imperfect words for a lack of feelings.",

    "Because there is so much I don't know how to explain.",

    "I care about you in the small moments.",

    "When I wonder if you have eaten.",

    "When I wonder if you're okay.",

    "When I see something that reminds me of you.",

    "When I wait for your message.",

    "When I wish I could make you smile.",

    "You have taken my whole heart.",

    "And somehow, you keep becoming more important to me.",

    "And whenever you feel like you are not important or special, remember this.",

    "There is someone far away from you who cares.",

    "Someone who thinks about you.",

    "Someone who wants to see you happy.",

    "Someone who is incredibly grateful that you exist.",

    "And that someone is me.",

    "Always."
  ],
  signoff: "Love, Nihal ❤️"
},
  8: null,
  9: {
    title: "September 9 — Happy Birthday",
    theme: "default",
    themeName: "",
    lockedMessage: "This letter is waiting for you.",
    paragraphs: ["Happy birthday to us. ♡"],
    signoff: "With love yours,"
  }
};

// Locked-state icon and next-unlocked icon per theme
const THEME_ICONS = {
  default: { locked: "🔒", unlocked: "💌" },
  sunrise: { locked: "✉️", unlocked: "🌅" },
  night: { locked: "🌙", unlocked: "✨" }
};

// =====================================================
// HELPERS
// =====================================================
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function unlockDateForDay(day) {
  return new Date(2026, 8, day); // September `day`, 2026
}

function isUnlocked(day) {
  const today = startOfDay(new Date());
  return today >= unlockDateForDay(day);
}

function themeFor(day) {
  const data = LETTERS[day];
  return (data && data.theme) || 'default';
}
