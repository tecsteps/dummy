export const dynamic = "force-dynamic";

// File upload form (multipart). Tests whether the check system can drive an
// <input type=file> journey.
export default function Upload() {
  return (
    <main style={{ padding: 48, fontFamily: "system-ui", maxWidth: 520 }}>
      <h1>Upload a document</h1>
      <form method="post" action="/api/upload" encType="multipart/form-data">
        <p>
          <label htmlFor="doc">Choose a file</label>
          <br />
          <input id="doc" name="doc" type="file" />
        </p>
        <button type="submit">Upload</button>
      </form>
    </main>
  );
}
