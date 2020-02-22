import './upload-button.css';
import { html } from 'lighterhtml';

export { UploadButton };

function UploadButton({ name, onchange }) {
  return html`
    <label class="text file-upload" tabindex="0">
      <input
        onchange="${onchange}"
        name="upload-file"
        type="file"
        accept=".json"
      />
      ${name}
    </label>
  `;
}
