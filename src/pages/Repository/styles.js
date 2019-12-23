import styled from 'styled-components';

const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

const IssueList = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);

    img {
      border-radius: 50%;
      width: 60px;
      margin: 10px;
    }

    strong {
      font-size: 16px;
      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 10px;

      a {
        text-decoration: none;
        color: #999;
        font-size: 14px;
        &:hover {
          color: #7159c1;
        }
      }
    }
  }
`;

export { Loading, Owner, IssueList };
