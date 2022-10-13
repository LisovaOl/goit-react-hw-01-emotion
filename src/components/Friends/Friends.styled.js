import styled from '@emotion/styled';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;
export const FriendsList = styled.ul`
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 10px;
  padding: 30px;
`;

export const FriendsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
`;
export const NameFriend = styled.p`
  font-weight: bold;
`;

