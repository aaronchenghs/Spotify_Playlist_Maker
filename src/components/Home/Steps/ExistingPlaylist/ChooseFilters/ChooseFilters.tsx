import { FilterPlaylistState } from "../../../../../Models/FilterPlaylistModels";
import "./_ChooseFilters.styles.css";

interface ChooseFiltersProps {
  filterPlaylistState: FilterPlaylistState;
  setFilterPlaylistState: React.Dispatch<
    React.SetStateAction<FilterPlaylistState>
  >;
}

const ChooseFilters = ({
  filterPlaylistState,
  setFilterPlaylistState,
}: ChooseFiltersProps) => {
  return (
    <div className="stepContainer">
      <h2>Choose Filters</h2>
    </div>
  );
};

export default ChooseFilters;
