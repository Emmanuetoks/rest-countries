const FilterBox = () => {
  return (
    <div className="navigation__filterbox bg-card ">
      {/* <input list="region" className="text-accent-200 navigation__input fw-100" value={'Filter by Region'} /> */}
      <datalist id="region">
        <option value="Africa" />
        <option value="America" />
        <option value="Asia" />
        <option value="Europe" />
        <option value="Oceania" />
      </datalist>
    </div>
  );
};

export default FilterBox;
