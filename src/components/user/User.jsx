import React, { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import { AlbumModal } from '../AlbumsModal/AlbumModal';

import {
  ButtonContainer,
  Card,
  UserButton,
  UserContactContainer,
  UserContacts,
  UserLocation,
  UserLocationContainer,
  UserName,
  UserNameContainer,
} from './User.styled';

export const User = ({
  item: {
    id,
    name,
    username,
    email,
    address: { city, street, suite },
    phone,
    website,
    company: { name: companyName },
  },
}) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mailLink = `mailto:${email}`;
  const phoneLink = `tel:${phone}`;
  const webLink = `http://${website}`;

  return (
    <>
      <Card>
        <UserNameContainer>
          <UserName>Name: {name}</UserName>
          <UserName>NickName: {username}</UserName>
        </UserNameContainer>

        <UserContactContainer>
          <UserContacts>
            <AiOutlineMail size={20} />
            <a href={mailLink}>{email}</a>
          </UserContacts>
          <UserContacts>
            <CgWebsite size={20} />
            <a href={webLink} target="_blank" rel="noreferrer">
              {website}
            </a>
          </UserContacts>
          <UserContacts>
            <AiOutlinePhone size={20} />
            <a href={phoneLink}>{phone}</a>
          </UserContacts>
        </UserContactContainer>

        <UserLocationContainer>
          <UserLocation>
            <span>City:</span> {city}
          </UserLocation>
          <UserLocation>
            <span>Street:</span> {street}
          </UserLocation>
          <UserLocation>
            <span>Suite:</span> {suite}
          </UserLocation>
        </UserLocationContainer>

        <UserLocation style={{ marginBottom: '18px' }}>Company: {companyName}</UserLocation>
        <ButtonContainer>
          <UserButton to={`/posts/${id}`} state={{ from: location }}>
            Posts
          </UserButton>
          <UserButton onClick={() => setIsModalOpen(true)}>Albums</UserButton>
        </ButtonContainer>
      </Card>

      {isModalOpen && <AlbumModal onToggle={() => setIsModalOpen(false)} id={id} />}
    </>
  );
};
