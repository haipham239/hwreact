import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, Tooltip, Popconfirm, message, Input, PageHeader} from 'antd';
import { eye, trash } from '../../components/Icon';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const { Column } = Table;

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderBy, setOrderBy] = useState('NONE');
  const text = 'Are you sure to delete this post?';

  const getPostList = async () => {
    setIsLoading(true);
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        setIsLoading(false);
        setPosts(response.data);
        setPostList(response.data);
      });
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostList()
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    if (sorter.order) {
      setOrderBy(sorter.order === "ascend" ? "ASC" : "DESC")
    } else {
      setOrderBy('NONE')
    }
  };

  const confirmDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
    message.info('Post deleted !')
  };

  const searchPost = (e) => {
    const keyword = e.target.value.trim();
    if (keyword.length > 0) {
      const newPosts = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()))
      setPostList(newPosts);
    } else {
      setPostList(posts);
    }
  };

  return (
    <div id="post-page" className="page-content">
      <PageHeader
        className="page-header"
        title="Posts"
      />

      <Input
        placeholder="Search post"
        prefix={<SearchOutlined />}
        onChange={searchPost}
        allowClear
        className="search-input"
      />

      <Table
        dataSource={postList}
        pagination={false}
        rowKey={(obj) => obj.id}
        onChange={onTableChange}
        loading={isLoading}
      >
        <Column
          title="ID"
          key="id"
          dataIndex="id"
          render={(id) => <p>{id}</p>}
        />
        <Column
          title={"Title --- Sort (" + orderBy + ")"}
          key="title"
          dataIndex="title"
          sorter={(a, b) => a.title.localeCompare(b.title)}
          render={(title) => <p>{title}</p>}
        />
        <Column
          title="Action"
          key="action"
          dataIndex="id"
          render={(id) =>
            <ul>
              <li>
                <Link to={'/posts/' + id}>
                  <Tooltip placement="top" title="View detail">
                    <i className="page-icon eye-icon">{eye}</i>
                  </Tooltip>
                </Link>
              </li>
              <li>
                <Tooltip placement="top" title="Delete">
                  <Popconfirm placement="top" title={text} onConfirm={() => confirmDelete(id)} okText="Yes" cancelText="No">
                    <i className="page-icon trash-icon">{trash}</i>
                  </Popconfirm>
                </Tooltip>
              </li>
            </ul>
          }
        />
      </Table>
    </div>
  );
}

export default PostPage;
