import { gql } from "@apollo/client";

/**
 * auth
 */
export const SIGNIN = gql`
  mutation SignIn($code: String!) {
    authGithub(code: $code) {
      token
      user {
        id
        githubLogin
        profiles {
          id
          name
          matchingPoint
          bio
        }
      }
    }
  }
`;

/**
 * user
 */
export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($name: String!, $bio: String!) {
    updateMyProfile(name: $name, bio: $bio) {
      name
      bio
    }
  }
`;

/**
 * post
 */
export const CREATE_POST = gql`
  mutation createPost(
    $description: String!
    $title: String!
    $requiredSkillsId: [Int!]!
  ) {
    post(
      description: $description
      title: $title
      requiredSkillsId: $requiredSkillsId
    ) {
      description
      title
      requiredSkills {
        id
        name
      }
      driver {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export const MATCH_POST = gql`
  mutation matchPost($postId: String!, $navigatorId: Int!) {
    registerNavigator(postId: $postId, navigatorId: $navigatorId) {
      navigator {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: String!
    $title: String
    $description: String
    $requiredSkillsIds: [Int]
  ) {
    updatePost(
      id: $id
      title: $title
      description: $description
      requiredSkillsIds: $requiredSkillsIds
    ) {
      id
    }
  }
`;

/**
 * message
 */
export const SEND_MESSAGE = gql`
  mutation sendMessage($postId: String!, $content: String!) {
    createMessage(postId: $postId, content: $content) {
      id
      content
    }
  }
`;

/**
 * community
 */
export const CREATE_COMMUNITY = gql`
  mutation createCommunity($name: String!) {
    createCommunity(name: $name) {
      id
      name
    }
  }
`;

export const JOIN_COMMUNITY = gql`
  mutation joinCommunity($communityId: String!) {
    joinCommunity(communityId: $communityId) {
      token
    }
  }
`;
