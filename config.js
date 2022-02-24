// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Clinton",
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  greetingNight: "Good evening",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "dcd19d748f9a4da76524de8ec2bac3f8", // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "F", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "36.074",
  defaultLongitude: "-78.894",

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Hey",
      icon: "mail",
      link: "https://app.hey.com/",
    },
    {
      id: "2",
      name: "Todoist",
      icon: "list-checks",
      link: "https://todoist.com",
    },
    {
      id: "3",
      name: "YNAB",
      icon: "banknote",
      link: "https://app.youneedabudget.com/",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Pinboard",
      icon: "pin",
      link: "https://pinboard.in/u:cndreisbach",
    },
    {
      id: "6",
      name: "NAS",
      icon: "hard-drive",
      link: "http://quickconnect.to/dreisbach",
    },
  ],

  secondButtonsContainer: [
    // {
    //   id: "1",
    //   name: "Music",
    //   icon: "headphones",
    //   link: "https://open.spotify.com",
    // },
    // {
    //   id: "2",
    //   name: "twitter",
    //   icon: "twitter",
    //   link: "https://twitter.com/",
    // },
    // {
    //   id: "3",
    //   name: "bot",
    //   icon: "bot",
    //   link: "https://discord.com/app",
    // },
    // {
    //   id: "4",
    //   name: "Amazon",
    //   icon: "shopping-bag",
    //   link: "https://amazon.com/",
    // },
    // {
    //   id: "5",
    //   name: "Hashnode",
    //   icon: "pen-tool",
    //   link: "https://hashnode.com/",
    // },
    // {
    //   id: "6",
    //   name: "Figma",
    //   icon: "figma",
    //   link: "https://figma.com/",
    // },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "African Town",
          link: "https://mynoise.net/NoiseMachines/senegalUrbanLifeAmbienceGenerator.php",
        },
        {
          name: "Irish Coast",
          link: "https://mynoise.net/NoiseMachines/windSeaRainNoiseGenerator.php",
        },
        {
          name: "Flowing Water",
          link: "https://mynoise.net/NoiseMachines/levadaSoundGenerator.php",
        },
        {
          name: "A Soft Murmur",
          link: "https://asoftmurmur.com/",
        },
      ],
    },
    {
      icon: "loader",
      id: "2",
      links: [
        {
          name: "Wordle",
          link: "https://www.nytimes.com/games/wordle/index.html",
        },
        {
          name: "Feedbin",
          link: "https://feedbin.com/",
        },
        {
          name: "Marginalia",
          link: "https://search.marginalia.nu/explore/random",
        },
        {
          name: "Pinboard",
          link: "https://pinboard.in/u:cndreisbach",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    // {
    //   icon: "binary",
    //   id: "1",
    //   links: [
    //     {
    //       name: "Spotify",
    //       link: "https://www.spotify.com",
    //     },
    //     {
    //       name: "Reddit",
    //       link: "https://www.reddit.com",
    //     },
    //     {
    //       name: "Hashnode",
    //       link: "https://www.hashnode.com",
    //     },
    //     {
    //       name: "Pocket",
    //       link: "https://www.pocket.com",
    //     },
    //   ],
    // },
    // {
    //   icon: "github",
    //   id: "2",
    //   links: [
    //     {
    //       name: "Front",
    //       link: "https://www.reddit.com/r/Frontend/",
    //     },
    //     {
    //       name: "Rust",
    //       link: "https://www.reddit.com/r/rust/",
    //     },
    //     {
    //       name: "Go",
    //       link: "https://www.reddit.com/r/golang/",
    //     },
    //     {
    //       name: "Repos",
    //       link: "https://github.com/migueravila",
    //     },
    //   ],
    // },
  ],
}
