
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickRepliesProps {
  replies: Array<{
    id: string;
    text: string;
  }>;
  onSelectReply: (replyId: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ replies, onSelectReply }) => {
  return (
    <div className="p-3 border-t">
      <p className="text-sm font-medium mb-2 text-muted-foreground">Sugerencias:</p>
      <div className="flex flex-wrap gap-2">
        {replies.map((reply) => (
          <Button
            key={reply.id}
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => onSelectReply(reply.id)}
          >
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;
