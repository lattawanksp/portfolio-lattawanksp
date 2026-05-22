import ProfilePreviewCard from "./00_ProfilePreviewCard.jsx";

function LeftSidebar() {
  return (
    <aside className="flex min-h-0 w-full flex-col p-5 sm:p-6">
      <div className="flex min-h-full w-full flex-1 flex-col justify-end">
        <div className="w-full">
          <ProfilePreviewCard />
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
