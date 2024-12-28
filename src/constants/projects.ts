import { TestProject } from "@/types/project";

export const PROJECTS = [
  {
    id: "1",
    title: "Building 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    finished: false,
    street: "Antunovac 8B",
    punctures: [
      {
        id: "1",
        title: "Puncture 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "30",
        height: "78",
      },
      {
        id: "2",
        title: "Puncture 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "28",
        height: "30",
      },
      {
        id: "3",
        title: "Puncture 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: true,
        width: "28",
        height: "30",
      },
    ],
  },
  {
    id: "2",
    title: "Construction site 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
    finished: false,
    street: "Heinzlova 22",
    punctures: [
      {
        id: "1",
        title: "Puncture 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "30",
        height: "78",
      },
      {
        id: "2",
        title: "Puncture 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "28",
        height: "30",
      },
    ],
  },
  {
    id: "3",
    title: "Bridge 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
    finished: false,
    street: "Kneza Branimira 29",
    punctures: [
      {
        id: "1",
        title: "Puncture 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "30",
        height: "78",
      },
      {
        id: "2",
        title: "Puncture 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "28",
        height: "30",
      },
    ],
  },
  {
    id: "4",
    title: "Bridge 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
    finished: true,
    street: "Gradišćanska 24",
    punctures: [
      {
        id: "1",
        title: "Puncture 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "30",
        height: "78",
      },
      {
        id: "2",
        title: "Puncture 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.",
        finished: false,
        width: "28",
        height: "30",
      },
    ],
  },
] as TestProject[];
