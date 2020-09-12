import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
// Components
import {
  InfoList,
  Wrap,
  ProfilePhoto,
  Row,
  DimSpan,
  Code,
  StackList,
} from './style';

const HumanInfo: React.FC = () => {
  return (
    <Wrap>
      <ProfilePhoto>
        <img src="https://wp.hapas.io/wp-content/uploads/IMG_0221-scaled.jpg" />
      </ProfilePhoto>
      <div>
        <InfoList>
          <li>
            <h3>한상현</h3>
          </li>
          <li>
            <FaPhoneAlt /> <a href="tel:01053929950">01053929950</a>
          </li>
          <li>
            <FaEnvelope />{' '}
            <a href="melto: dandan9509@gmail.com">dandan9509@gmail.com</a>
          </li>
          <li>
            <FaGithub /> <a href="https://github.com/Hansanghyeon">999hyeon</a>
          </li>
          <li>
            <CgWebsite /> <a href="https://4log.hapas.io">4log.hapas.io</a>
          </li>
        </InfoList>
      </div>
    </Wrap>
  );
};

const StackInfo: React.FC = () => {
  return (
    <div>
      <StackList>
        <li>
          주요 기술 <DimSpan>3개</DimSpan>
        </li>
        <li>
          <Code color="#61DAFB">ReactJS</Code>
          <Code color="#F0B5F2">💅🏾 styled-component</Code>
          <Code color="#CD6899">Sass(SCSS)</Code>
          <Code>Storybook</Code>
          <Code>WordPress</Code>
          <Code>HTML/CSS/JS</Code>
        </li>
        <li>그 외 다뤄본 기술 & 인프라 기타 등등</li>
        <li>
          <Code>AWS</Code>
          <Code>Vultr</Code>
          <Code>GCP</Code>
          <Code>Redux.js</Code>
          <Code>react-redux</Code>
          <Code>Bootstrap 4</Code>
        </li>
      </StackList>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <>
      <Row>
        <HumanInfo />
      </Row>
      <Row>
        <StackInfo />
      </Row>
    </>
  );
};

export default Profile;
