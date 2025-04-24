import { useState } from "react";

export default function PromptEngineeringForm() {
  const [goal, setGoal] = useState("");
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");
  const [format, setFormat] = useState("");
  const [style, setStyle] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const prompt = `
[GOAL]  
Your task is to: ${goal}

[ROLE]  
Act as a ${role}.

[CONTEXT]  
Here is background you should incorporate:  
${context}

[FORMAT]  
Return your response in the following format:  
${format}

[STYLE]  
Write with a tone that is ${style}. Prioritize: clarity, insight density, and precision.

[INSTRUCTIONS]  
Before you begin:
- Think step by step if reasoning is involved.
- Clarify any ambiguous assumptions.
- If input is incomplete, infer based on prior patterns.

Now begin.`;
    setOutput(prompt);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-900">
      <h1 className="text-3xl font-bold">Prompt Engineering Form</h1>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Goal</label>
          <textarea className="w-full border rounded p-2" rows={2} placeholder="What do you want the AI to do?" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Role</label>
          <input className="w-full border rounded p-2" type="text" placeholder="Who should the AI act as?" value={role} onChange={(e) => setRole(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Context</label>
          <textarea className="w-full border rounded p-2" rows={3} placeholder="Relevant background or constraints" value={context} onChange={(e) => setContext(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Format</label>
          <textarea className="w-full border rounded p-2" rows={2} placeholder="e.g., Bullet points, table, executive summary..." value={format} onChange={(e) => setFormat(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Style</label>
          <input className="w-full border rounded p-2" type="text" placeholder="Tone or emphasis (e.g., analytical, persuasive)" value={style} onChange={(e) => setStyle(e.target.value)} />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded" onClick={handleSubmit}>
          Generate Prompt
        </button>
      </div>

      {output && (
        <div className="mt-6 border rounded p-4 bg-gray-100 whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-2">Generated Prompt</h2>
          {output}
        </div>
      )}
    </div>
  );
}
