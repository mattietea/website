import { FC } from 'react';

const IndexPage: FC = () => (
  <div className="container">
    <h1>matt thomas</h1>
    <p style={{ fontSize: '1.1rem', margin: 0 }}>
      frontend developer at divido
    </p>

    <style jsx={true}>
      {`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(100vh - 7.5rem);
        }
      `}
    </style>
  </div>
);

export default IndexPage;
