import classNames from "classnames";

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isSelected: boolean;
}

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  endingPage?: number;
  onChange: (page: number) => void;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  isSelected,
  ...props
}) => {
  const classes = classNames(
    isSelected
      ? "rounded-[100px] px-3 py-1 bg-gray-400 border-gray-400 border-solid border-2"
      : "rounded-[100px] px-3 py-1 bg-gray-200"
  );
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <div className="flex flex-row gap-2">
      {/* Starting page... current page, current -2 , current - 1, current, crrent +1, current + 2, ...end */}
      <PaginationButton
        isSelected={props.currentPage === 1}
        onClick={(p) => props.onChange(1)}
      >
        1
      </PaginationButton>
      {props.currentPage > 3 && <div className="mx-4">....</div>}
      {props.currentPage >= 3 && (
        <PaginationButton
          isSelected={false}
          onClick={() => props.onChange(props.currentPage - 1)}
        >
          {props.currentPage - 1}
        </PaginationButton>
      )}
      {props.currentPage !== 1 && (
        <PaginationButton
          isSelected={true}
          onClick={(p) => props.onChange(props.currentPage)}
        >
          {props.currentPage}
        </PaginationButton>
      )}
      {props.currentPage !== props.totalPages - 1 &&
        props.currentPage !== props.totalPages && (
          <PaginationButton
            isSelected={false}
            onClick={(p) => props.onChange(props.currentPage + 1)}
          >
            {props.currentPage + 1}
          </PaginationButton>
        )}

      {props.currentPage !== props.totalPages &&
        props.currentPage + 1 !== props.totalPages - 1 && (
          <>
            {props.currentPage !== props.totalPages - 1 && (
              <div className="mx-4">....</div>
            )}
          </>
        )}

      {props.currentPage !== props.totalPages && (
        <PaginationButton
          isSelected={false}
          onClick={() => props.onChange(props.totalPages)}
        >
          {props.totalPages}
        </PaginationButton>
      )}
    </div>
  );
};
export default Pagination;
