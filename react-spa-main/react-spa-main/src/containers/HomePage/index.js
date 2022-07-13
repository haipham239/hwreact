import React from 'react';
import { PageHeader, Typography } from 'antd';

const { Paragraph } = Typography;

function HomePage() {
  return (
    <div id="home-page" className="page-content">
      <PageHeader
        className="page-header"
        title="Welcome to my Homepage"
      />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet neque nec semper dapibus. In porttitor
        luctus mauris vitae finibus. Vivamus suscipit lacus purus, ut imperdiet velit venenatis a. Curabitur sagittis
        odio ut tellus pulvinar, non vestibulum velit posuere. Pellentesque sit amet convallis erat. Phasellus metus
        nibh, elementum tincidunt auctor sed, hendrerit ut leo. Proin eget urna iaculis, suscipit lacus sit amet,
        euismod velit. Nunc condimentum lectus pharetra massa convallis tincidunt. Ut bibendum blandit lectus quis
        aliquam. Suspendisse tortor est, egestas ac pharetra quis, pellentesque eu diam. Aenean eu congue ligula.
      </Paragraph>
      <Paragraph>
        Sed ultrices, tortor sit amet finibus tempor, mauris enim lacinia nibh, id sodales tortor felis vitae turpis.
        Sed eget erat nec magna varius iaculis. Suspendisse blandit eros risus, non rutrum odio dignissim vel. Vivamus
        dui urna, pharetra vitae odio ac, euismod sodales massa. Maecenas non tellus purus. Proin vitae dolor ut enim
        tincidunt fermentum. Aliquam erat volutpat. Aliquam erat volutpat. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Fusce vehicula egestas neque, quis consectetur turpis
        congue nec.
      </Paragraph>
      <Paragraph>
        In vel felis sapien. Suspendisse pretium fermentum lacinia. Fusce vestibulum elit vel sapien maximus eleifend.
        Suspendisse sagittis quam eu tortor aliquam, non egestas massa finibus. Proin nec eros ante. Sed ac tortor id
        tellus tincidunt congue in sit amet sem. Proin suscipit lorem non metus fermentum lacinia. Morbi vitae massa
        feugiat, tempus felis accumsan, hendrerit leo. Curabitur iaculis purus dolor, non lacinia mauris finibus sit
        amet. Etiam feugiat leo quis aliquet sagittis. Phasellus interdum est lectus, dictum rhoncus odio posuere quis.
        Mauris sit amet ante blandit, placerat dui id, dictum mi.
      </Paragraph>
    </div>
  );
}

export default HomePage;
