const dummy = (blogs) => {
    return 1
  }
  const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
      return sum + item.likes
    }
    return blogs.reduce(reducer, 0)
  }

  const favoriteBlog = (blogs) => { 
    const reducer = (favorite, blog) => {
      return (favorite.likes > blog.likes) ? favorite : blog
    }
    return blogs.reduce(reducer, 0)
  }

  const mostBlogs = (blogs) => {
    const blogCounts = {}
  
    blogs.forEach((blog) => {
      if (blog.author in blogCounts) {
        blogCounts[blog.author] += 1
      } else {
        blogCounts[blog.author] = 1
      }
    })
  
    const mostBlogsAuthor = Object.keys(blogCounts).reduce((a, b) => (blogCounts[a] > blogCounts[b] ? a : b))
  
    return {
      author: mostBlogsAuthor,
      blogs: blogCounts[mostBlogsAuthor]
    }
  }

  const mostLikes = (blogs) => {
    const blogLikes = {}
  
    blogs.forEach((blog) => {
      if (blog.author in blogLikes) {
        blogLikes[blog.author] += blog.likes
      } else {
        blogLikes[blog.author] = blog.likes
      }
    })
  
    const mostLikesAuthor = Object.keys(blogLikes).reduce((a, b) => (blogLikes[a] > blogLikes[b] ? a : b))
  
    return {
      author: mostLikesAuthor,
      likes: blogLikes[mostLikesAuthor]
    }}
  

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }
