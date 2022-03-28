import { useNavigate } from "react-router";

type LinksProps = {
  name: string;
  path: string;
};

type BreadcrumbProps = {
  links: LinksProps[];
};

const Breadcrumb = ({ links }: BreadcrumbProps) => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb">
      {links.map((res: LinksProps, index: number) => {
        const isLast = links.length === index + 1;
        return (
          <>
            <span
              className={`${
                !isLast
                  ? "text-primary hover:cursor-pointer hover:underline "
                  : ""
              } text-[14px]`}
              onClick={() => !isLast && navigate(res.path)}
            >
              {res.name}
            </span>
            {!isLast && (
              <span className="text-primary text-[14px]">{" > "}</span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
