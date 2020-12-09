import React, { Component } from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import "../styles/templates/blog.scss"

class BlogPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data
    const { disqusConfig } = this.props

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          keywords={post.frontmatter.title.split(" ")}
        />
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'/>
<style>
html{
scroll-behavior:smooth;}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}

#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  padding: 15px;
  
}

#myBtn:hover {
  color: #555;
}

</style>
<button onclick="topFunction()" id="myBtn" title="Go to top"><li class="fa fa-arrow-circle-up" style="font-size:45px"></li></button>
<script>
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>
        <div className="blog-wrapper">
          <span>{`by Aliif - ${post.frontmatter.date} - ${post.timeToRead} min Read`}</span>
          <h1 className="title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
           <Disqus config={disqusConfig} />
        </div>
      </Layout>
    )
  }
}
export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

