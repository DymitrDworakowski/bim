function CaseStudy({ id }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Case Study {id}</h2>
      <p>
        This is a detailed case study for the course with ID: {id}. Here you can add more information about the course, its objectives, outcomes, and any other relevant details.
      </p>
    </div>
  );
}
export default CaseStudy;