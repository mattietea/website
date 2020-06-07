const IndexPage = () => (
  <>
    <div className="container">
      <div>
        <h5 style={{ marginBottom: 16 }}>hey 👋, i'm matt.</h5>
        <h5>i do frontend 👨‍🎨 at divido <br /> in london 🇬🇧.</h5>
      </div>
      <style jsx>
        {`
          .container {
            height: calc(100vh - 56px);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          h5 {
            margin-bottom: 16px;
          }

          ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}
      </style>
    </div>
  </>
)

export default IndexPage
