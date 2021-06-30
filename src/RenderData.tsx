import React, { useContext, useState } from "react";
import { Store } from "./Store";
import { IEpisode, IAction } from "./interfaces";
import { LoadingOutlined, HomeOutlined } from "@ant-design/icons";
import FavPage from "./FavPage";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

const imageSrc =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomedycentral.mtvnimages.com%2Furi%2Fmgid%3Aarc%3Acontent%3Acomedycentral.com%3A60a1ae4a-6bbd-41ae-845f-e00765c2e0ca%3Fquality%3D0.7&f=1&nofb=1";

export default function RenderData(): JSX.Element {
  const [name, setName] = useState("episodes");
  const { state, dispatch } = useContext(Store);

  const handleAddFavOnClick = (episode: IEpisode): IAction => {
    const isEpisodeInFav = state.favorites.includes(episode);

    if (isEpisodeInFav === false) {
      return dispatch({
        type: "ADD_FAV",
        payload: episode,
      });
    } else {
      return dispatch({
        type: "DELETE_FAV",
        payload: episode,
      });
    }
  };

  const propsForEpisodesListComponent = {
    state: state,
    handleAddFavOnClick,
  };

  const showMyFav = () => {
    name === "episodes" && setName("favorites");
  };

  const showAllEpisodes = () => {
    name === "favorites" && setName("episodes");
  };

  return (
    <div>
      <header className="header" style={{ color: "#d48a9b" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={imageSrc}
            alt="logo"
            style={{
              borderRadius: "50%",
              width: 80,
              height: 80,
              marginRight: "1rem",
              border: "white 2px solid",
            }}
          />{" "}
          <h1>Typical Rick</h1>
        </div>
        <button
          type="button"
          onClick={showAllEpisodes}
          style={{ backgroundColor: "black", border: "none" }}
        >
          <HomeOutlined
            style={{ color: "white", fontSize: "2.5rem", cursor: "pointer" }}
          />
        </button>
        <p>
          {state.favorites.length ? (
            <div style={{ fontSize: "1.5rem", marginTop: "15px" }}>
              favorite(s): {state.favorites.length}
            </div>
          ) : (
            <div style={{ fontSize: "1.5rem", marginTop: "15px" }}>
              Pick your favorite episode
            </div>
          )}
        </p>
        {state.favorites.length > 0 && (
          <button
            onClick={showMyFav}
            style={{
              backgroundColor: "palevioletred",
              borderRadius: "70px",
              width: "100px",
              border: "none",
              color: "white",
              fontSize: "1.2rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            My<br></br>{" "}
            <div style={{ color: "black", fontWeight: 600 }}>Favorites</div>
          </button>
        )}
      </header>
      <React.Suspense
        fallback={
          <div
            style={{ fontSize: "4rem", color: "white", textAlign: "center" }}
          >
            <LoadingOutlined />
          </div>
        }
      >
        <section className="episode-layout" style={{ color: "#d48a9b" }}>
          {name === "episodes" ? (
            <EpisodesList {...propsForEpisodesListComponent} />
          ) : (
            <FavPage {...propsForEpisodesListComponent} />
          )}
        </section>
      </React.Suspense>
    </div>
  );
}
