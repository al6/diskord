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
    const { orderedMembers = [] } = this.props;
    return (
      <div className="guild-members-index">
        <div className="channel-messages-index-header"></div>
        <div className="guild-members-index-header">
          <div className="guild-members-index-header-label">Guild Members</div>
          <span className="guild-members-index-header-count-divider">-</span>
          <div className="guild-members-count">{orderedMembers.length}</div>
        </div>
        {orderedMembers.map(member => (
          <div
            onClick={() => console.log("working")}
            key={member.id}
            className="current-guild-member"
          >
            <div className="guild-members-index-member-profile-picture">
              {" "}
              <img
                className="small-logo-placeholder"
                src="https://diskord-pro.s3.amazonaws.com/white-logo-no-words.png"
              />
            </div>
            <div className="guild-members-index-member-username">
              {member.username}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GuildMembersIndex;
