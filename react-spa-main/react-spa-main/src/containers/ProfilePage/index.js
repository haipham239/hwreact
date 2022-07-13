import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {PageHeader, Typography, Card, Avatar, Spin} from 'antd';

const { Paragraph } = Typography;
const { Meta } = Card;

function ProfilePage() {
  const userId = localStorage.getItem('user-id');
  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserProfile = async (userId) => {
    setIsLoading(true);
    try {
      await axios.get('https://60dff0ba6b689e001788c858.mockapi.io/users/' + userId).then(response => {
        setIsLoading(false);
        setProfile(response.data);
      });
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      setAuth(true);
      getUserProfile(userId);
    } else {
      setAuth(false);
    }
  }, [userId]);

  return (
    <div id="profile-page" className="page-content">
      <PageHeader
        className="page-header"
        title="Profile"
      />
      {
        auth ?
          <>
            {
              isLoading ?
                <div className="page-loading">
                  <Spin />
                </div>
                :
                <Card>
                  <Meta
                    avatar={<Avatar src="https://i.imgur.com/fLfnbEy.png" />}
                    title={"Name: " + profile.name}
                    description={"ID: " + profile.id}
                  />
                </Card>
            }
          </>
          :
          <Paragraph>
            Please <Link to={'/login'}>Login</Link> to continue.
          </Paragraph>
      }
    </div>
  );
}

export default ProfilePage;
