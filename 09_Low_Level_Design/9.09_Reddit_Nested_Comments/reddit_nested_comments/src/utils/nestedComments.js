import { v4 } from 'uuid'

export const nestedComments = [
   {
      id: v4(),
      username: "MukulPaul2105",
      comment: "Anim fugiat voluptate commodo labore proident culpa officia nisi elit sunt mollit sunt.",
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      likes: 12,
      deslikes: 1,
      replies: [
         {
            id: v4(),
            username: "DeepikaPadukone11",
            comment: "Exercitation officia culpa ea exercitation.",
            createdAt:new Date(Date.now() - 1 * 60 * 60 * 1000),
            likes: 5,
            deslikes: 1,
            replies: []
         }
      ]
   },
   {
      id: v4(),
      username: "HarshitBuddhiraja11",
      comment: "Quis elit tempor mollit reprehenderit sint ea eu aliquip laboris ipsum amet.",
      createdAt: new Date(Date.now() - 3.5 * 60 * 60 * 1000),
      likes: 11,
      deslikes: 3,
      replies: [
         {
            id: v4(),
            username: "VishalGauba21",
            comment: "Cillum ad voluptate occaecat amet velit aliqua labore occaecat magna.",
            createdAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
            likes: 4,
            deslikes: 1,
            replies: [
               {
                  id: v4(),
                  username: "JayRawal2202",
                  comment: "Elit sint ut minim nisi nostrud aliquip sit.",
                  createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
                  likes: 2,
                  deslikes: 0,
                  replies: [
                     {
                        id: v4(),
                        username: "MukulPaul2105",
                        comment: "Enim fugiat ullamco et sint ullamco officia.",
                        createdAt: new Date(Date.now() - 1.2 * 60 * 60 * 1000),
                        likes: 1,
                        deslikes: 0,
                        replies: []
                     }
                  ]
               }
            ]
         },
         {
            id: v4(),
            username: "HarshitBuddhiraja11",
            comment: "Ipsum velit minim labore qui Lorem in laboris officia amet et ad.",
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
            likes: 2,
            deslikes: 0,
            replies: []
         }
      ]
   },
   {
      id: v4(),
      username: "JayRawal2202",
      comment: "Laborum commodo in id voluptate magna adipisicing dolor amet ex aliqua enim.",
      createdAt: new Date(Date.now() - 10 * 60 * 1000),
      likes: 4,
      deslikes: 0,
      replies: []
   },
]