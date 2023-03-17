import { IPost } from './post'

export const posts: IPost[] = [
  {
    postID: 1,
    authorID: 1,
    authorName: 'Kapil Sarma',
    title: 'Title 1',
    content: 'Eu Lorem et tempor cupidatat velit esse amet quis exercitation eu tempor incididunt irure. Lorem ad nisi do aute laboris qui. Tempor aliqua Lorem mollit ullamco dolore laboris enim dolor est eiusmod cupidatat. Enim reprehenderit aliqua nisi nostrud officia aliqua deserunt reprehenderit sint deserunt sint. Ex aliqua velit amet laborum dolore amet in irure in amet dolore laborum officia reprehenderit. Proident occaecat nostrud eiusmod veniam ad nulla tempor.',
    createdAt: new Date('12-02-2023'),
    updatedAt: new Date('11-02-2023'),
    isLiked: false,
    likes: 2
  },
  {
    postID: 2,
    authorID: 1,
    authorName: 'Kapil Sarma',
    title: 'Title 2',
    content: 'Quis sit proident nostrud excepteur officia officia Lorem irure ullamco. Ipsum labore aliqua quis qui tempor nisi nostrud ipsum ut nostrud ea. Laborum proident consectetur Lorem labore ex dolor occaecat sunt. Adipisicing fugiat qui pariatur nulla dolore sunt ex aliquip exercitation. Voluptate non aliquip qui cillum reprehenderit laboris cupidatat..',
    createdAt: new Date('01-01-2023'),
    updatedAt: new Date('09-01-2023'),
    isLiked: false,
    likes: 4
  },
  {
    postID: 3,
    authorID: 1,
    authorName: 'Kapil Sarma',
    title: 'Title 3',
    content: 'Id aliquip consectetur aliqua sint laboris sint consequat exercitation id culpa. Elit qui Lorem amet ad fugiat eiusmod cupidatat adipisicing magna exercitation ad. Reprehenderit nostrud cillum proident dolor. Nostrud minim pariatur mollit mollit irure. Ad commodo esse anim eu ex dolore dolor est ipsum adipisicing veniam..',
    createdAt: new Date('04-02-2023'),
    updatedAt: new Date('07-02-2023'),
    isLiked: false,
    likes: 5
  },
  {
    postID: 1,
    authorID: 3,
    authorName: 'Jassy',
    title: 'Title 4',
    content: 'Aliqua voluptate aliqua deserunt irure labore quis id cillum culpa esse reprehenderit commodo sit Lorem. Anim amet veniam ut Lorem ad ipsum consequat mollit non. Cillum velit adipisicing laboris Lorem nulla non proident nisi sit.',
    createdAt: new Date('01-11-2022'),
    updatedAt: new Date('05-17-2022'),
    isLiked: false,
    likes: 1
  },
  {
    postID: 1,
    authorID: 4,
    authorName: 'Maddy',
    title: 'Title 5',
    content: 'Esse commodo occaecat esse culpa veniam laborum commodo est. Irure ullamco do aliqua ad laborum magna excepteur ut ut. Ad culpa cillum nisi labore eiusmod nostrud. Aliqua dolore duis duis eiusmod ex. Incididunt dolore aliquip proident eiusmod consectetur tempor adipisicing adipisicing irure non eiusmod sit sint.',
    createdAt: new Date('09-01-2022'),
    updatedAt: new Date('15-02-2022'),
    isLiked: false,
    likes: 5
  }
]
