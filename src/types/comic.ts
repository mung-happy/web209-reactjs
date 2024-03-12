export interface Comic{
    id: number,
      title: "Ore Wa Lolicon Ja Nai!",
      image: "https://i.truyenvua.com/ebook/190x247/ore-wa-lolicon-ja-nai_1580887599.jpg?gt=hdfgdfg&mobile=2",
      categories: number[],
      author: string,
      chapters: [
        {
          numberChapter: number,
          link: string
        }
      ],
      description: string
      goodComic: boolean
}

export interface ListComic {
  total:number
  page:number
  limit:number
  data:Comic[]
}