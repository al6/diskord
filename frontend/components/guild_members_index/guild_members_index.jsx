import React from "react";

class GuildMembersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: props.currentMemberId
    };
  }

  render() {
    return (
      <div className="guild-members-index">GuildMembersIndexComponent</div>
    );
  }
}

export default GuildMembersIndex;
