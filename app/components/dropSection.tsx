'use client';

export default function DropSection() {
  return (
    <section className="w-full py-20 flex items-center flex-col border-4 border-dotted border-indigo-700">
      <input type="file" id="file" className="" />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
    </section>
  );
}
