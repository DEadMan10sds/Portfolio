import { Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const email: string = "adan.sanchez@proton.me";

export function Email() {
  const [_value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <Button
      onMouseLeave={() => setCopied(false)}
      onClick={() => {
        copy(email);
        setCopied(true);
      }}
      className="flex items-center gap-x-3 px-4 py-2.5 lowercase"
    >
      <Typography
        className="border-r border-gray-400/50 pr-3 font-normal"
        variant="small"
      >
        {email}
      </Typography>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-white" />
      ) : (
        <DocumentDuplicateIcon className="h-4 w-4 text-white" />
      )}
    </Button>
  );
}
