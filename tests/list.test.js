const listHelper = require('../utils/list_helper')
const totalLikes = require('../utils/list_helper').totalLikes
const favoriteBlog = require('../utils/list_helper').favoriteBlog
const mostBlogs = require('../utils/list_helper').mostBlogs
const mostLikes = require('../utils/list_helper').mostLikes

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const listWithMultiBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '1982341235',
    title: 'Testi1',
    author: 'Minä',
    url: 'http://www.testi.fi/',
    likes: 6,
    __v: 0
  },
  {
    _id: '013123434',
    title: 'testi2',
    author: 'Minä',
    url: 'http://www.testi2.fi/',
    likes: 7,
    __v: 0
  }
]

describe('total likes', () => {
  
    test('when list has only one blog equals the likes of that', () => {
      const result = totalLikes(listWithMultiBlog)
      expect(result).toBe(18)
    })

  })

  describe('fav blog', () => {
    test('favorite blog', () => {
        const result = favoriteBlog(listWithMultiBlog)
        expect(result).toEqual(listWithMultiBlog[2])
    })
  })

  describe('most blogs', () => {
    test('most blogs', () => {
        const result = mostBlogs(listWithMultiBlog)
        expect(result).toEqual({ author: 'Minä', blogs: 2})
    })
})

describe('most likes', () => {
    test('most likes', () => {
        const result = mostLikes(listWithMultiBlog)
        expect(result).toEqual({ author: 'Minä', likes: 13})
    })
})