<?php

namespace Blomstra\MarkUnread\Listeners;

use Flarum\Discussion\Event\Saving;

class MarkUnread
{
    public function handle (Saving $event)
    {
        if (isset($event->data['attributes']['unread'])) {
            /** @var \Flarum\Discussion\UserState $state */
            $state = $event->discussion->stateFor($event->actor);
            $state->last_read_post_number = 0;
            $state->last_read_at = null;
            $state->save();
        }
    }
}
