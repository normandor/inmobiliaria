import MeetTheTeamItem from "./MeetTheTeamItem";

export default function MeetTheTeam() {
  let userTestStatus = [
    { function: "0", name: "Available" },
    { function: "1", name: "Ready" },
    { function: "2", name: "Started" },
  ];

  let message = `asidjfpoia dfjaoisd fjioasd jfoiasd jfoiajsdoifjaosdi jfoiaj sdoifjasd`;

  return (
    <div className="row">
      <div className="col-md-12 text-center align-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-700">The team behind Pacifico</h2>
        <p className="section-subtitle text-gray-400">{message}</p>
        <div
          className="max-w-6xl mx-auto p-3 flex gap-8 my-10"
          style={{ justifyContent: "center", flexWrap: "wrap" }}
        >
          {userTestStatus.map((url, index) => (
            <MeetTheTeamItem name={url.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
