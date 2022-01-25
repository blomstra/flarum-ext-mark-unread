import app from 'flarum/admin/app';

app.initializers.add('blomstra/mark-unread', () => {
  app.extensionData.for('blomstra-mark-unread').registerPermission(
    {
      icon: 'fas fa-envelope',
      label: app.translator.trans('blomstra-mark-unread.admin.permissions.mark-unread'),
      permission: 'discussion.markUnread',
    },
    'view',
    65
  );
});
