import app from 'flarum/forum/app';
import extendDiscussions from './extend/extendDiscussions';

app.initializers.add('blomstra/mark-unread', () => {
  extendDiscussions();
});
