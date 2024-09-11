import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TopicDescription() {
  return (
    <div className="mx-20 lg:mx-44">
      {/* topic */}
      <div className=" mt-5">
        <label> write the topic which you want to generate</label>
        <Input placeholder="topic" />
      </div>
      {/* text area */}

      <div className="mt-5">
        <label>Tell more about the course(optional)</label>
        <Textarea placeholder="About your course " />
      </div>
    </div>
  );
}

export default TopicDescription;
