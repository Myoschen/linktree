import {useFormContext} from '@/contexts/form';
import {IconLink, IconPlus, IconX} from '@tabler/icons-react';
import {ChangeEvent} from 'react';

function Links() {
  const {formData, setFormData} = useFormContext();
  const {links} = formData;

  const onInputAdd = () =>
    setFormData((prev) => ({
      ...prev,
      links: [...prev.links, {label: '', url: ''}],
    }));

  const onLabelChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newLinks = [...links];
      newLinks[index].label = e.target.value;
      setFormData((prev) => ({
        ...prev,
        links: newLinks,
      }));
    };

  const onURLChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newLinks = [...links];
    newLinks[index].url = e.target.value;
    setFormData((prev) => ({
      ...prev,
      links: newLinks,
    }));
  };

  const onInputRemove = (index: number) => () => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      links: newLinks,
    }));
  };

  return (
    <div>
      <div className="flex items-center">
        <IconLink />
        <h2 className="ml-1 text-lg font-medium tracking-wide">Links</h2>
      </div>
      <div className="mt-4 space-y-6 border p-6">
        {links.map((link, index) => (
          <div
            className="relative grid gap-8 border p-6 md:grid-cols-2"
            key={index}
          >
            <button
              className="absolute right-2 top-2"
              type="button"
              onClick={onInputRemove(index)}
            >
              <IconX size={20} />
            </button>
            <div>
              <label
                className="block text-sm text-gray-700"
                htmlFor={`label-${index}`}
              >
                Label
              </label>
              <input
                id={`label-${index}`}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                type="text"
                placeholder="Label"
                value={link.label}
                onChange={onLabelChange(index)}
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-700"
                htmlFor={`url-${index}`}
              >
                URL
              </label>
              <input
                id={`url-${index}`}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                type="text"
                placeholder="URL"
                value={link.url}
                onChange={onURLChange(index)}
              />
            </div>
          </div>
        ))}
        <button
          className="flex w-full items-center justify-center rounded-md border py-2 text-gray-500 hover:bg-gray-50"
          type="button"
          onClick={onInputAdd}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}

export default Links;
