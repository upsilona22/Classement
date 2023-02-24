import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "wheat",
          marginTop: "5rem",
          minHeight: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        French Demo Community
        <img
          alt="img"
          style={{ width: "20px", height: "20px" }}
          src="https://e7.pngegg.com/pngimages/810/372/png-clipart-blue-and-white-sports-car-logo-rocket-league-logo-t-shirt-rocket-league-blue-text-thumbnail.png"
        />
      </div>
    );
  }
}
