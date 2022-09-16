import React from "react";
import { Search, Grid, Segment, Header } from "semantic-ui-react";
import "./SearchBot.css";
import {  exampleReducer } from "./utils";

export const SearchBot = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    loading: false,
    results: [],
    value: "",
  });
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results:[],
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="search-bot">
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={loading}
            placeholder="Search..."
            onResultSelect={(e, data) =>
              dispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.title,
              })
            }
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>

        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify({ loading, results, value }, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify({}, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};
