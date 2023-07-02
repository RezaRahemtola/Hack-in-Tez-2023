import { TGame } from "@/types/TStorage";

type LibraryListProps = {
  games: TGame[];
};

const LibraryList = ({ games }: LibraryListProps): JSX.Element => {
  return (
    <>
      {games.map((game, idx) => (
        <div key={idx} className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{game.metadata.name}</h2>

            <p className="mb-4">{game.metadata.description}</p>

            <div className="card-actions justify-end items-center">
              <div className="text-lg me-4">{game.quantity} owned</div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  alert("Not implemented");
                }}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LibraryList;
