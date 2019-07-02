<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Gridsome + NetlifyCMS - Collection Relations</h1>
   
    <p>This is a demonstration of using Gridsome &amp; NetlifyCMS. You can see the code on Github <a href="https://github.com/zefman/gridsome-netlifycms-relations" target="_blank">here</a></p>

    <article v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <div v-html="edge.node.content"></div>
      <p>Author: {{ edge.node.author.name }}</p>
    </article>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node { 
        id
        title
        content
        author {
          name
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Gridsome + NetlifyCMS Collection Relations'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

article {
  padding: 10px 30px;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  border-radius: 10px;
  margin-top: 30px;
}
</style>
