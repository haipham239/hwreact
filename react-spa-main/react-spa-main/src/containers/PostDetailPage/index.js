import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, Badge, Spin, PageHeader} from 'antd';

function PostDetailPage({ match }) {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const postId = match.params.postId;

  const getPostDetail = async (id) => {
    setIsLoading(true);
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
        setIsLoading(false);
        setPost(response.data);
      });
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostDetail(postId)
  }, [postId]);

  return (
    <div id="post-detail-page" className="page-content">
      {
        isLoading ?
          <div className="page-loading">
            <Spin />
          </div>
          :
          <>
            <PageHeader
              className="page-header"
              title={"Post #" + post.id}
            />
            <Card title={
              <div className="card-title">
                <Badge
                  count={post.id}
                  style={{ backgroundColor: '#1890ff' }}
                />
                {post.title}
              </div>
            }>
              <p>{post.body}</p>
            </Card>
          </>
      }
    </div>
  );
}

export default PostDetailPage;
