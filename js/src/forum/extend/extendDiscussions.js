import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';

export default function () {
  Discussion.prototype.canMarkUnread = Model.attribute('canMarkUnread');

  extend(DiscussionControls, 'moderationControls', function (items, discussion) {
    if (!discussion.canMarkUnread() || discussion.isUnread()) return;

    items.add(
      'blomstra-unread',
      <Button icon="fas fa-envelope" onclick={this.unreadAction.bind(discussion)}>
        {app.translator.trans('blomstra-mark-unread.forum.controls.mark-unread')}
      </Button>,
      30
    );
  });

  DiscussionControls.unreadAction = function () {
    this.save({ unread: true }).then(() => {
      if (app.current.matches(DiscussionPage)) {
        app.current.get('stream').update();
      }

      m.redraw();
    });
  };
}
