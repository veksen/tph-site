import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
    const doc = data.markdownRemark

    return (
        <div>
            <h1>{doc.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML = {{ __html: doc.html  }}/>
        </div>   
    )
}

export const docQuery = graphql`
    query DocContent($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    } 
`