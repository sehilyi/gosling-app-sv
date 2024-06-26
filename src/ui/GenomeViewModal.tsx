import React from 'react';
import genome_interactions_1 from '../script/img/modal_images/genome_view/interactions_1.png';
import genome_interactions_2 from '../script/img/modal_images/genome_view/interactions_2.png';
import genome_interactions_3 from '../script/img/modal_images/genome_view/interactions_3.png';
import genome_interactions_4 from '../script/img/modal_images/genome_view/interactions_4.png';

export const GenomeViewModal = () => {
    return (
        <div
            className="modal fade"
            id="genome-view-modal"
            tabIndex={-1}
            aria-labelledby="Genome View Instruction Modal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Genome View Instructions
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="popover-content">
                            <div className="section interactions">
                                <h4>Interactions</h4>
                                <hr className="header" />
                                <div className="section-content">
                                    <div className="block with-image">
                                        <img src={genome_interactions_1} alt="" />
                                        <div className="text">
                                            <p>
                                                <b>Click and drag</b> the blue selection brush to highlight regions of
                                                the genome.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block with-image">
                                        <img src={genome_interactions_2} alt="" />
                                        <div className="text">
                                            <p>
                                                <b>Click and drag</b> the edges of the selection brush to resize it.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block with-image">
                                        <img src={genome_interactions_3} alt="" />
                                        <div className="text">
                                            <p>
                                                <b>Hover</b> over a structural variant to see detailed information.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block with-image">
                                        <img src={genome_interactions_4} alt="" />
                                        <div className="text">
                                            <p>
                                                <b>Click</b> on a structural variant to inspect breakpoints in other
                                                views.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
