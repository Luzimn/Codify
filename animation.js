const frames = [
 `
 (•_•)
  /))╯
   /|
  `,
  `
  (•_•)
  ╰((| 
   /|
  `,
  `
 (•_•)
 ╰((| 
  /|
  `,
  ,
  `
 (•_•)
  /))╯
   /|
  `,
    `
    (•_•)
     /))╯
      /|
  `,
  `
  (•_•)
  ╰((|
   /|
  `
]

let i = 0;


setInterval(() => {
  console.clear();
  console.log(frames[i]);
  i = (i + 1) % frames.length;
}, 400);